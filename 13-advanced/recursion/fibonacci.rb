def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 2
    a, b = b, a+b # atomic: parallel assignment
    n -= 1 # Mutation: moves towards the base case
  end

  b # nth fibonacci number
end

def fibonacci_recursive(n)
  # Your code here
end

require 'pry'
binding.pry
