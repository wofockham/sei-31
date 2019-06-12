# inputs = [1, 4, 25, 7, -12]

inputs = [-1, -1001, -17]

# puts inputs.max

# def largest(a)
#   largest = -Float::INFINITY # We could probably also use a[0]
#   a.each do |n|
#     largest = n if n > largest
#   end
#   largest
# end

# Everything is reduce.
def largest(a)
  a.reduce(-Float::INFINITY) do |memo, n|
    n > memo ? n : memo
  end
end

p largest(inputs)
