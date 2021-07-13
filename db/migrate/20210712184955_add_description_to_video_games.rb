class AddDescriptionToVideoGames < ActiveRecord::Migration[6.1]
  def change
    add_column :video_games, :description, :text
  end
end
