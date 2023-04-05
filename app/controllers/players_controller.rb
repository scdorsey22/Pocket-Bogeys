class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: users, status: :ok
    end

    def show
        player = Player.find(params[:id])
        render json: player, status: :ok  # serializer: PlayerShowSerializer
    end

    def create
        player = Player.create!(user_params)
        session[:player_id] = player.id
        render json: user, status: :created
    end

    def update
        player = Player.find(params[:id])
        player.update!(player_params)
        render json: player, status: :accepted # serializer: UserShowSerializer
    end

    def destroy
        player = Player.find(params[:id])
        player.destroy
        head :no_content
    end

    private
    # ERRORS FOR INVALID AND RECORD NOT FOUND ARE IN APP CONTROLLER
    def player_params
        params.permit(:email, :name, :username, :password) # params here for create and update
    end

end
