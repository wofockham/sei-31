def fibonacci_iterative(n)
  a = 1
  b = 1
  # Linear: O(N)
  while n > 2
    a, b = b, a+b # atomic: parallel assignment
    n -= 1 # Mutation: moves towards the base case
  end

  b # nth fibonacci number
end

def fibonacci_recursive(n)
  if n == 1 || n == 2
    1 # base case
  else
    # Quadratic O(N^2)
    fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
  end
end

require 'pry'
binding.pry
