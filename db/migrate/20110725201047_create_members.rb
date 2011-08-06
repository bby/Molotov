class CreateMembers < ActiveRecord::Migration
  def self.up
    create_table :members do |t|
      t.column "twitter_handle", :text
      t.integer :team_id
      t.timestamps
    end
  end

  def self.down
    drop_table :members
  end
end
