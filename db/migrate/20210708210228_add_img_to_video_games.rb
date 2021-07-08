class AddImgToVideoGames < ActiveRecord::Migration[6.1]
  def change
    add_column :video_games, :img_url, :string
  end
end
