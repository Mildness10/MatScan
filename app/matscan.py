import google.generativeai as genai
import os
from dotenv import load_dotenv
import PIL.Image

img = PIL.Image.open('C:\\Users\\user\\Documents\\MatScan\\matscan\\static\\img\\skeleton.png')

load_dotenv()
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel('gemini-pro-vision')

response = model.generate_content(["Give a thorough description of what is contained in this image.", img], stream=True)
response.resolve()

print(response.text)