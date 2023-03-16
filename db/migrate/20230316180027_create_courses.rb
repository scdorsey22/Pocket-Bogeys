class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :course_name
      t.integer :number_of_holes
      t.boolean :has_transportation
      t.string :address
      t.string :website

      t.timestamps
    end
  end
end