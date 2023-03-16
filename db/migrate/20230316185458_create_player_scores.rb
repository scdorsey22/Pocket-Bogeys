class CreatePlayerScores < ActiveRecord::Migration[7.0]
  def change
    create_table :player_scores do |t|
      t.integer :hole_score
      t.integer :putts
      t.boolean :tee_accuracy
      t.references :round, null: false, foreign_key: true

      t.timestamps
    end
  end
end
