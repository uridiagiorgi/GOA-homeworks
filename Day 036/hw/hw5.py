def palindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]
string_example1 = "wow"
string_example2 = "Hello"
string_example3 = "A man, a plan, a canal: Panama"

print(palindrome(string_example1)) 
print(palindrome(string_example2))  
print(palindrome(string_example3))  
