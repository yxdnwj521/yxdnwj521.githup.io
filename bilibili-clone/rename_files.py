import os

def rename_files(directory):
    # 遍历目录中的所有文件
    for filename in os.listdir(directory):
        if filename.endswith('.avif'):
            # 构建完整的文件路径
            old_path = os.path.join(directory, filename)
            
            # 获取新文件名（移除特定后缀并将.avif改为原始扩展名）
            if '@' in filename:
                # 分割文件名，取@之前的部分
                base_name = filename.split('@')[0]
                # 判断原始扩展名
                if base_name.endswith('.png'):
                    new_name = base_name
                elif base_name.endswith('.jpg'):
                    new_name = base_name
                elif base_name.endswith('.jpeg'):
                    new_name = base_name
                else:
                    new_name = base_name + '.jpg'  # 默认使用.jpg
            else:
                new_name = filename.replace('.avif', '.jpg')
            
            # 构建新的文件路径
            new_path = os.path.join(directory, new_name)
            
            # 重命名文件
            try:
                os.rename(old_path, new_path)
                print(f'Renamed: {filename} -> {new_name}')
            except Exception as e:
                print(f'Error renaming {filename}: {str(e)}')

# 使用方法
directory = r"D:\网站1\bilibili-clone\images"
rename_files(directory) 