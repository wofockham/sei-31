def reverse(input)
  output = []
  input.chars.each do |letter|
    output.unshift letter
  end

  output.join ''
end

puts reverse('hotdogs')
