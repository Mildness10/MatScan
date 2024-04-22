import google.generativeai as genai
import os
from dotenv import load_dotenv
import PIL.Image

img = PIL.Image.open('C:\\Users\\user\\Documents\\MatScan\\matscan\\static\\img\\skeleton.png')

load_dotenv()
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel('gemini-pro-vision')

# response = model.generate_content(["Give a thorough description of what is contained in this image.", img], stream=True)
# response.resolve()

# print(response.text)

def process_image(image_file):
    try:
        # Open image file
        img = PIL.Image.open(image_file)
        
        # Generate content description
        response = model.generate_content(["Give a thorough description of what is contained in this image.", img], stream=True)
        response.resolve()
        
        # Extract and return description
        description = response.text
        return description
    except Exception as e:
        print(f"Error processing image: {e}")
        return "Error processing image"