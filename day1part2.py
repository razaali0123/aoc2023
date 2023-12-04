import numpy as np
import pandas as pd
import requests
from variables import cookies
import json



check = {'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9}
first = []
last = []
data = requests.get("https://adventofcode.com/2023/day/1/input", cookies=cookies ).text

# data = """twoone
# twone
# two1nine
# eightwothree
# abcone2threexyz
# xtwone3four
# 4nineeightseven2
# zoneight234
# 7pqrstsixteen"""
for word in data.split():
    flag = True
    for cnt,c in enumerate(word):
        if c.isnumeric():
            if flag:
                f = int(c)
                flag = False
            l = int(c)
        else:
            for digit in check.keys():
                digit_len = len(digit)
                if (digit in word[cnt:cnt+digit_len]) and (flag):
                    f = check[digit]
                    flag = False


                if (digit in word[cnt:cnt+digit_len]):
                    l = check[digit]
                    



    first.append(f)
    last.append(l)

summ = 0
for i,j in zip(first, last):
    summ += (i*10)+j


print(summ)



