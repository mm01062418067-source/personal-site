import json
import os
from collections import Counter

import jieba
import wordcloud

# 读取文本
files = os.listdir('input')
s = ''
involved = 0
for file in files:
    if not file.endswith('.json'):
        continue
    with open(os.path.join('input', file), 'r', encoding='utf-8') as f:
        for m in json.load(f):
            if 'content' in m:
                s += m['content'] + '\n'
with open('input.txt', 'w', encoding='utf-8') as f:
    f.write(s)  # 将所有内容写入一个文件
ls = jieba.lcut(s)  # 生成分词列表
text = ' '.join(ls)  # 连接成字符串

with open('hit_stopwords.txt', 'r', encoding='utf-8') as f:
    stopwords = f.read().splitlines()  # 读取停用词列表

# 过滤停用词和长度小于2的词
filtered_words = [word for word in ls if word not in stopwords and len(word) >= 2 and word.strip()]

# 统计词频
word_count = Counter(filtered_words)

# 输出词频信息
print(f'共涉及{involved}个文件')
print(f'总词数: {len(ls)}')
print(f'过滤后词数: {len(filtered_words)}')
print(f'不重复词数: {len(word_count)}')
print('\n词频统计 (前20个高频词):')
print('-' * 30)
for word, count in word_count.most_common(20):
    print(f'{word}: {count}')

# 保存词频统计结果到文件
with open('word_frequency.txt', 'w', encoding='utf-8') as f:
    f.write(f'词频统计结果\n')
    f.write(f'=' * 30 + '\n')
    f.write(f'共涉及文件数: {involved}\n')
    f.write(f'总词数: {len(ls)}\n')
    f.write(f'过滤后词数: {len(filtered_words)}\n')
    f.write(f'不重复词数: {len(word_count)}\n\n')
    f.write(f'完整词频统计:\n')
    f.write('-' * 30 + '\n')
    for word, count in word_count.most_common():
        f.write(f'{word}: {count}\n')

wc = wordcloud.WordCloud(font_path="msyh.ttc", width=1000, height=700, background_color='white', max_words=35, stopwords=stopwords)
wc.generate(text)  # 加载词云文本
wc.to_file("wc.png")  # 保存词云文件
print(f'\n生成词云图片: wc.png')
print(f'词频统计已保存到: word_frequency.txt')
