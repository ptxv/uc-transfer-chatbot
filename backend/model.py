import sqlite3
from langchain.agents import create_agent
from langchain.chat_models import init_chat_model
import os
from dotenv import load_dotenv

load_dotenv()

llm = init_chat_model(
    model="gpt-5-mini",
    # env files don't support booleans (so we need to check with string)
    base_url="https://api.llm7.io/v1" if os.getenv("USE_LLM7").lower() == "true" else None,
    api_key=os.getenv("AI_API_KEY"),
)

agent = create_agent(
    model=llm,
    system_prompt="You are a helpful assistant",
)

def get_ai_response(user_message: str):
    result = agent.invoke(
        {"messages": [{"role": "user", "content": user_message}]}
    )
    return result["messages"][-1].content_blocks

    """
    # for now

    conn = sqlite3.connect("transfer.db")
    cursor = conn.cursor()

    cursor.execute(\"\"\"
        SELECT answer FROM transfer_info
        WHERE ? LIKE '%' || question_keyword || '%'
        LIMIT 1
    \"\"\", (user_message.lower(),))

    result = cursor.fetchone()
    conn.close()

    if result:
        return result[0]

    return "I do not have information about that yet."
    """