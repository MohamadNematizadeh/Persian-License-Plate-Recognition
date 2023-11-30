import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--a",type=int,help="first number")
parser.add_argument("--b",type=int,help="second number")
args = parser.parse_args()
a = args.a
b = args.b
result = a+b
print(result)