import json
import os
from collections import Counter

import jieba
import numpy as np
import PIL
import PIL.ImageShow
import wordcloud

file = '最终/图15主题4.png'

with open('word_freq.json', 'r', encoding='utf-8') as f:
    words_freq = json.load(f)

x, y = np.ogrid[:600, :800]
mask = ((x - 300) / 300) ** 2 + ((y - 400) / 400) ** 2 > 1
mask = 255 * mask.astype(int)

wc = wordcloud.WordCloud(font_path="msyh.ttc", width=1000, height=700, background_color='white', max_words=100, mask=mask, max_font_size=100)
wc.generate_from_frequencies(words_freq)  # 使用词频字典生成词云
wc.to_file(file)  # 保存词云文件
PIL.ImageShow.show(wc.to_image())
print(f'\n生成词云图片: {file}')
print(f'词频统计已保存到: word_frequency.txt')
