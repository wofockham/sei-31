class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.boolean :streaming
      t.date :released
      t.string :rating
      t.text :plot

      t.timestamps
    end
  end
end
