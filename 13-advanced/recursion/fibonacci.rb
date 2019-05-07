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
    # Exponential O(2^N)
    fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
  end
end

# Memoisation
def fib_memo(n)
  @fib ||= {} # @fib = @fib || {}

  if @fib[n] # Previously found and saved in this "memoisation" hash
    @fib[n]
  elsif n == 1 || n == 2
    1 # base case
  else
    result = fib_memo(n - 1) + fib_memo(n - 2)
    @fib[n] = result
    result
  end
end

# Linear recursion
# TODO: Research Tail Call Optimisation (TCO)
def fib(n, a=1, b=1)
  if n == 1 || n == 2 # Base case
    b
  else
    # Linear: O(N)
    fib(n-1, b, a+b) # Tail recursion
  end
end


require 'pry'
binding.pry
