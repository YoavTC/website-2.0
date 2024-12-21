import os
from PIL import Image
import subprocess

def convert_images_to_webp(input_folder, output_folder):
    for root, _, files in os.walk(input_folder):
        for file in files:
            if file.lower().endswith(('.png', '.jpeg', '.jpg')):
                input_path = os.path.join(root, file)
                relative_path = os.path.relpath(input_path, input_folder)
                output_path = os.path.join(output_folder, os.path.splitext(relative_path)[0] + ".webp")

                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                try:
                    img = Image.open(input_path).convert("RGB")
                    img.save(output_path, "webp")
                    print(f"Converted {input_path} to {output_path}")
                except Exception as e:
                    print(f"Failed to convert {input_path}: {e}")

def convert_videos_to_gif(input_folder, output_folder):
    for root, _, files in os.walk(input_folder):
        for file in files:
            if file.lower().endswith('.mp4'):
                input_path = os.path.join(root, file)
                relative_path = os.path.relpath(input_path, input_folder)
                output_path = os.path.join(output_folder, os.path.splitext(relative_path)[0] + ".gif")

                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                try:
                    # Use ffmpeg to convert mp4 to gif
                    subprocess.run([
                        "ffmpeg", "-i", input_path, "-vf", "scale=-1:360,fps=10", "-t", "10",
                        "-y", output_path
                    ], check=True)
                    print(f"Converted {input_path} to {output_path}")
                except subprocess.CalledProcessError as e:
                    print(f"Failed to convert {input_path} using ffmpeg: {e}")


infolder = "media"
outfolder = "media-optimized"

def main():
    if not os.path.exists(infolder):
        print("The specified input folder does not exist.")
        return

    os.makedirs(outfolder, exist_ok=True)

    convert_images_to_webp(infolder, outfolder)
    convert_videos_to_gif(infolder, outfolder)

if __name__ == "__main__":
    main()