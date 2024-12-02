from PIL import Image
import os
from pathlib import Path

def convert_avif_to_jpg(input_dir):
    # 确保输出目录存在
    if not os.path.exists('converted_images'):
        os.makedirs('converted_images')
    
    # 获取所有图片文件
    for file in os.listdir(input_dir):
        if file.endswith('.avif'):
            try:
                # 构建新文件名
                new_name = file.split('@')[0] + '.jpg'
                
                # 打开图片
                img = Image.open(os.path.join(input_dir, file))
                
                # 转换并保存为JPG
                if img.mode in ('RGBA', 'LA'):
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    background.paste(img, mask=img.split()[-1])
                    background.save(os.path.join('converted_images', new_name), 'JPEG', quality=95)
                else:
                    img.convert('RGB').save(os.path.join('converted_images', new_name), 'JPEG', quality=95)
                
                print(f'Successfully converted {file} to {new_name}')
            except Exception as e:
                print(f'Error converting {file}: {str(e)}')

# 使用方法
input_directory = r"D:\网站1\bilibili-clone\images"
convert_avif_to_jpg(input_directory) 