from fastapi import FastAPI
from api.router import blog

app = FastAPI()
app.include_router(blog.router)
