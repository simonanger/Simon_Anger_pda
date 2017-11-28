### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val # bracket should be placed around val
  if val = 1 # needs 2 ==
  return true # indentation error
  else
  return false # indentation error
  end
end

dif max a b # should say def not dif should also have a bracket around a and b with a comma in between
  if a > b
      return a # indentetation error
  else
  b # missing return and indentation error
  end
end
end # extra end that shouldnt be here

def looper
  for i in 1..10
  puts i # indentation error
  end
end# needs return i

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# needs an end

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1 #spelling error
end


if failures
  puts "Test Failed" # switch around passed and failed
else
  puts "Test Passed"
end
