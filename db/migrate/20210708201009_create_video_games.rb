class CreateVideoGames < ActiveRecord::Migration[6.1]
  def change
    create_table :video_games do |t|
      t.string :title
      t.string :rating
      t.string :publisher
      t.string :genre
      t.string :platform
      t.string :release_year

      t.timestamps
    end
  end
end
