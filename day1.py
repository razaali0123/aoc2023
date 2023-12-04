import numpy as np
import pandas as pd
import requests
from variables import cookies
import json



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



