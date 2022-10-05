# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
def even_odd_check (num)
    if num % 2 == 0
        "#{num} is even"
    else
        "#{num} is odd"
    end
end


num1 = 7
# Expected output: '7 is odd'
p even_odd_check(num1)

num2 = 42
# Expected output: '42 is even'
p even_odd_check(num2)

num3 = 221
# Expected output: '221 is odd'
p even_odd_check(num3)




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# string is the parameter, any strings put in the () in the print statment will pass through
#delete deletes any letters specified and in this case will delete all vowels just like written in the ()
def str_filter(string)
    string.delete("aeiou")
end

# beatles_album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
# p str_filter(beatles_album1)

# beatles_album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
# p str_filter(beatles_album2)

# beatles_album3 = 'Abbey Road'
# # Expected output: 'bby Rd'
# p str_filter(beatles_album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palindromeCheck(string)
            
        if string.downcase == string.downcase.reverse
             "#{string} is a palindrome"
        else 
             "#{string} is not a palindrome"
        end
    end
palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
p palindromeCheck(palindrome_tester1)

palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
p palindromeCheck(palindrome_tester2)

palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
p palindromeCheck(palindrome_tester3)
