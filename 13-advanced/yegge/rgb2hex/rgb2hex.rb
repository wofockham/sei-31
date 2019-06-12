def rgb2hex(r, g, b)
  # ('%02x' % r) + ('%02x' % g) + ('%02x' % b)
  sprintf '%02x%02x%02x', r, g, b
end

puts rgb2hex(255, 255, 255) # => 'ffffff'
puts rgb2hex(0, 0, 0) # => '000000'
