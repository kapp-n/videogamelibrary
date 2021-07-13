class RemoveRatingFromVideoGames < ActiveRecord::Migration[6.1]
  def change
    remove_column :video_games, :rating, :string
  end
end
