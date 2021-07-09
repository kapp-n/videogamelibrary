class VideoGamesController < ApplicationController

    def index
        video_games = VideoGame.all 
        render json: video_games, include: :users 
    end

end
