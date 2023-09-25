#include <bits/stdc++.h>
#include <ctime>
#include <iomanip>
#include <unistd.h>
using namespace std;
#include "war.h"

void war(Player player) {
  // Set the font color to green
  cout << "\x1b[32m";

  // Set the font size to large
  cout << "\x1b[1m";

  // Print the text
  cout << "Welcome to the game of War!\n";

  // Reset the font color and size
  cout << "\x1b[0m";

  // Set the font color to light blue
  cout << "\x1b[94m";

  // Print the text
  cout << "This game is pretty straight forward. The highest card wins. Input "
          "any character "
          "to proceed and flip the next card. You will be "
          "versing a computer and if there is a draw between 2 cards, a best "
          "of 3 is put into motion. The first person to 21 overall victories "
          "wins. Winning a draw counts as 2 points. Have fun!\n"
       << endl;

  cout << "It is also important to note that leaving mid game will count as "
          "forfeit and you will lose all betted money, but you can still type "
          "'exit' at any time throughout the game."
       << endl;

  // Reset the font color
  cout << "\x1b[0m";

  // Allow real time to be used to create actual randomness
  srand(time(NULL));

  // Asking how much user wants to bet
  cout << "You have " << player.coins1 << ". How much would you like to bet?"
       << endl;
  float bet;
  cin >> bet;
  // Checking if the user bet more than they have
  if (bet > player.coins1) {
    cout << "You cannot bet more than what you have. Please re-run the game and input an applicable amount. Else, you will not be able to play. If you need more funds, please visit the store.";
    exit(0);
  }
  // Storing the bet in a variable and explaining wins/losses
  else {
    cout << "Alright, sounds good! You have now placed a bet of " << bet
         << ". If you win the game, you will win " << bet * 1.5
         << " coins. Else if you lose, you will lose all of what you've betted."
         << endl;
  }

  // 2 different vectors, one for computer's cards and one for player's cards
  vector<string> ccards = {"Two",   "Three", "Four", "Five", "Six",
                           "Seven", "Eight", "Nine", "Ten",  "Jack",
                           "Queen", "King",  "Ace"};
  vector<string> pcards = {"Two",   "Three", "Four", "Five", "Six",
                           "Seven", "Eight", "Nine", "Ten",  "Jack",
                           "Queen", "King",  "Ace"};

  // Counter veriables for keeping track of points of both the computer and
  // player
  int counterc = 0;
  int counterp = 0;
  // Loop that checks if computer has won the game
  bool flag = true;
  while (flag) {
    if (counterc >= 21) {
      player.coins1 = player.coins1 - bet;
      cout
          << "Unfortunately, you have lost and you have lost your bet of "
          << bet << ". You now have " << player.coins1
          << " coins left. If you would like to play again, "
             "please input 'yes' else, you will be returned to the main page. ";
      string leaveOrAgain;
      cin >> leaveOrAgain;
      // Resetting counter veriables if the user chooses to play again
      if (leaveOrAgain == "yes") {
        cout << "Okay, the game will now continue";
        counterc = 0;
        counterp = 0;
      } else {
        // Jak's HTML link required here
        cout << "Please open the following link: "
                "file:///C:/Users/682476/"
                "OneDrive%20-%20Peel%20District%20School%20Board/Downloads/"
                "games.html";
        exit(0);
      }
      // Checks if user won the game
    } else if (counterp >= 21) {
      player.coins1 = player.coins1 + bet * 1.5;
      cout << "You've won! You have earned 1.5x on your betted amount. You now "
              "have "
           << player.coins1
           << ". If you "
              "would like to play again, please input 'yes' else, you will be "
              "returned to the main page. ";
      string leaveOrAgain;
      cin >> leaveOrAgain;
      // Resetting counter variables if the user chooses to play again
      if (leaveOrAgain == "yes") {
        cout << "Okay, the game will now continue";
        counterc = 0;
        counterp = 0;
      } else {
        // Jak's HTML link required here
        cout << "Please open the following link: "
                "file:///C:/Users/682476/"
                "OneDrive%20-%20Peel%20District%20School%20Board/Downloads/"
                "games.html";
        exit(0);
      }
    }
    // Spaces for clarity when user is playing
    cout << endl;
    cout << endl;
    cout << endl;

    // Starting the actual game and telling user to input any character to start
    cout << "Enter any character to draw card: ";
    string ans;
    cin >> ans;
    // Letting the user leave at any time
    if (ans == "exit") {
      cout << "You have forfeited and lost your betted money. You are now "
              "being sent back to the main menu. ";
      cout << "Please open the following link: "
              "file:///C:/Users/682476/"
              "OneDrive%20-%20Peel%20District%20School%20Board/Downloads/"
              "games.html";
      exit(0);
      // User forfeit, so they lost their entire bet
      player.coins1 = player.coins1 - bet;
      flag = false;
    }
    // Random generation of cards from the pre-existing vectors
    int randomc = rand() % 12 + 1;
    int randomp = rand() % 12 + 1;
    cout << endl;
    // Displaying the computer's card
    cout << "The computer's card: " << ccards[randomc] << endl;
    // cout<<flush;
    usleep(1000000);
    // Displaying the player's card
    cout << "Your card: " << pcards[randomp] << endl;
    // cout<<flush;
    usleep(1000000);

    // Portion of code for if both cards are equal and WAR has occurred
    if (randomc == randomp) {
      cout << endl << endl;
      cout << "WAR!" << endl << endl;
      bool flag = true;
      while (flag) {
        // 3 random values for each the user and player
        int randomc1 = rand() % 12 + 1;
        int randomc2 = rand() % 12 + 1;
        int randomc3 = rand() % 12 + 1;
        int randomp1 = rand() % 12 + 1;
        int randomp2 = rand() % 12 + 1;
        int randomp3 = rand() % 12 + 1;

        // Beautiful tables to display the randomly picked cards with extreme
        // clarity
        cout << "Card"
             << "\t\t"
             << "Computer's Cards" << endl;
        cout << "----"
             << "\t\t"
             << "----------------" << endl;
        cout << "Card 1:    "
             << "\t" << ccards[randomc1] << endl;
        cout << "Card 2:    "
             << "\t" << ccards[randomc2] << endl;
        cout << "Card 3:    "
             << "\t" << ccards[randomc3] << endl;
        cout << endl;
        cout << "    "
             << "\t\t"
             << "Your Cards" << endl;
        cout << "    "
             << "\t\t"
             << "----------" << endl;

        // cout<<flush;
        usleep(1000000);
        cout << "Card 1:    "
             << "\t" << pcards[randomp1] << endl;
        // cout<<flush;
        usleep(1000000);
        cout << "Card 2:    "
             << "\t" << pcards[randomp2] << endl;
        // cout<<flush;
        usleep(1000000);
        cout << "Card 3:    "
             << "\t" << pcards[randomp3] << endl;

        // 2 counter variables to keep track of who won the war
        cout << endl;
        int warC = 0;
        int warP = 0;

        // Conditions to check if the computer or player won 2 out of 3 card
        // battles
        if (randomc1 > randomp1) {
          warC++;
        } else if (randomp1 > randomc1) {
          warP++;
        }

        if (randomc2 > randomp2) {
          warC++;
        } else if (randomp2 > randomc2) {
          warP++;
        }

        if (randomc3 > randomp3) {
          warC++;
        } else if (randomp3 > randomc3) {
          warP++;
        }

        // Conditions to check if the computer or player won the war and gained
        // 3 points
        if (warC > warP) {
          cout << "The computer won the war and gained 3 points! ";
          counterc += 3;
          cout << "The computer now has " << counterc << " point(s)." << endl;
        } else if (warC < warP) {
          cout << "You won the war and gained 3 points! ";
          counterp += 3;
          cout << "You now have " << counterp << " point(s)." << endl;
        } else if (warC == warP) {
          cout
              << "Looks like the war was a tie! No one was awarded any points!";
        }
        flag = false;
      }

      // Checking who gained a point for every battle (this is not part of the
      // war loop)
    } else if (randomc > randomp) {
      usleep(1000000);
      cout << "The computer gained a point." << endl << endl;
      counterc++;
      cout << "The computer now has " << counterc << " point(s)." << endl;
    } else if (randomp > randomc) {
      usleep(1000000);
      cout << "You gained a point." << endl << endl;
      counterp++;
      cout << "You now have " << counterp << " point(s)." << endl;
    }
  }
}

// Calling the function in int main
int main() {

  Player ply;
  //cout << "How many coins do you have: ";
  //cin >> ply.coins1;

  // Passing coins as an argument. Also passed by reference to the function so
  // that it is mutable and can store a changed value instead of resetting every
  // time.
  war(ply);
}
