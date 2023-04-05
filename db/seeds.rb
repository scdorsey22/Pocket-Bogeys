puts "Destroying previous data..."
User.destroy_all
User.reset_pk_sequence
Email.destroy_all
Email.reset_pk_sequence

puts "Seeding Players..."
10.times do
    Player.create(
        name: Faker::Name.name,
        username: Faker::Name.last_name,
        email: Faker::Name.first_name + "@email.com",
        password: Faker::Internet.password,
    )
end

5.times do
    Course.create(
        :course_name: Faker::Company.name,
        :number_of_holes: 18,
        :has_transportation: true,
        :address: Faker::Address.street_address,
        :website: `https://www.golf-course.com/#{Course.ids.sample}`
    )
end

