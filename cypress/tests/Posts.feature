Feature: Post List

  I want to open the app and see a list of posts
  
  @focus
  Scenario: Opening the app
    Given @home page
    Then I have a post called "My sixth post"