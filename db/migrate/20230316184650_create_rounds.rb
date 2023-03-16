class CreateRounds < ActiveRecord::Migration[7.0]
  def change
    create_table :rounds do |t|
      t.references :scorecard, null: false, foreign_key: true
      t.references :player, null: false, foreign_key: true

      t.timestamps
    end
  end
end
