require 'pry'

words = %w{ I AM THAT I AM } # Default
words = ARGV unless ARGV.empty?

puts "-=" * 40
puts words.join(' ').upcase.center 80
puts "=-" * 40

words.permutation.to_a.shuffle.each do |line|
  puts line.join(' ').center 80
end
