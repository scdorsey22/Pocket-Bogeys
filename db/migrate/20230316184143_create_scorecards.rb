class CreateScorecards < ActiveRecord::Migration[7.0]
  def change
    create_table :scorecards do |t|
      t.string :tee_color
      t.integer :slope_rating
      t.float :course_rating
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end