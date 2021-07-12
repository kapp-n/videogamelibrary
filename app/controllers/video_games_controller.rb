class VideoGamesController < ApplicationController
before_action :authorize

    def index
        user = User.find_by(id: session[:user_id])
        games = user.video_games 
        render json: games
    end

    def create
        user = User.find_by(id: session[:user_id])
        game = user.video_games.create(game_params)
        if game.valid?
            render json: game, status: :created
        else
            render json: { errors: game.errors.full_messages }, status: :unprocessable_entity
        end
    end


    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def game_params
        params.permit(:title, :rating, :publisher, :genre, :platform, :release_year, :img_url)
    end

end
