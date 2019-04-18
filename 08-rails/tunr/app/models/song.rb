# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :text
#  artist_id  :integer
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  belongs_to :artist, :optional => true
  belongs_to :album, :optional => true
  has_and_belongs_to_many :genres
  has_and_belongs_to_many :mixtapes
end
