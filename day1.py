import numpy as np
import pandas as pd
import requests
import json

cookies = {"_ga":"GA1.2.654334817.1701678041", "_gid": "GA1.2.1466434607.1701678041", "session":"53616c7465645f5fcdf7eff945fa327a6e8aec7b245639611b4ad8f4c0c7b1025a09c54e93aea6f432d08dfdf7088c43ac61c3088cb932b7fcc98bc256ce44a4", \
           "_ga_MHSNPJKWC7":"GS1.2.1701678041.1.1.1701678422.0.0.0"}

first = []
last = []
data = requests.get("https://adventofcode.com/2023/day/1/input", cookies=cookies ).text
for word in data.split():
    flag = True
    for c in word:
        if c.isnumeric():
            if flag:
                f = int(c)
                flag = False
            l = int(c)

    first.append(f)
    last.append(l)

summ = 0
for i,j in zip(first, last):
    summ += (i*10)+j


print(summ)



