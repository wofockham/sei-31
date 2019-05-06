def factorial_iterative(n)
  result = 1
  while n > 1
    puts "Current value of n: #{ n }, current value of result: #{ result }"
    result *= n # result = result * n
    n -= 1
  end

  result
end

def factorial_recursive(n)
  if n > 1
    n * factorial_recursive(n-1) # move towards the base case
  else
    1 # base case
  end
end

require 'pry'
binding.pry
