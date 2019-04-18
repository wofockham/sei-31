User.destroy_all
u1 = User.create :email => 'craigsy@ga.co'
u2 = User.create :email => 'jonesy@ga.co'

Song.destroy_all
s1 = Song.create :title => 'Have A Safe Trip, Dear'
s2 = Song.create :title => 'Toxic'
s3 = Song.create :title => "Don't Ask Me To Dance"
s4 = Song.create :title => 'Gut Feeling'

Album.destroy_all
l1 = Album.create :title => 'Engine Takes To The Water'
l2 = Album.create :title => 'In The Zone'
l3 = Album.create :title => 'The Last Romance'
l4 = Album.create :title => 'Are We Not Men? We Are Devo'

Artist.destroy_all
a1 = Artist.create :name => 'June of 44'
a2 = Artist.create :name => 'Britney Spears'
a3 = Artist.create :name => 'Arab Strap'
a4 = Artist.create :name => 'Devo'

Genre.destroy_all
g1 = Genre.create :name => 'Nautical Text Rock'
g2 = Genre.create :name => 'Nautical Math Rock'
g3 = Genre.create :name => 'Folk Rock'
g4 = Genre.create :name => 'Scottish Misery Rock'
g5 = Genre.create :name => 'Bollywood Bubblegum Pop'
g6 = Genre.create :name => 'New Wave'

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Driving Songs'
m2 = Mixtape.create :title => 'Makeout Music'
m3 = Mixtape.create :title => 'Code Jams'
m4 = Mixtape.create :title => 'Monkey Mongs'

# Associations #################################################################
# albums and songs
l1.songs << s1
l2.songs << s2
l3.songs << s3
l4.songs << s4

# artists and songs
a1.songs << s1
a2.songs << s2
a3.songs << s3
a4.songs << s4

# genres and songs
s1.genres << g1 << g2
s2.genres << g5
s3.genres << g3 << g4
s4.genres << g6

# mixtapes and songs
m1.songs << s1 << s2 << s3 << s4
m2.songs << s2 << s2 << s2 << s3
m3.songs << s2 << s4 << s2 << s4
m4.songs << s4 << s3 << s2 << s2

# mixtapes and users
u1.mixtapes << m1 << m2
u2.mixtapes << m3 << m4
