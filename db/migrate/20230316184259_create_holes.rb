class CreateHoles < ActiveRecord::Migration[7.0]
  def change
    create_table :holes do |t|
      t.string :color
      t.integer :hole_number
      t.integer :par
      t.integer :handicap
      t.integer :yardage
      t.references :scorecard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
