def longest_word(sentence):
    words = sentence.split()  
    longest = max(words, key=len)  
    return longest