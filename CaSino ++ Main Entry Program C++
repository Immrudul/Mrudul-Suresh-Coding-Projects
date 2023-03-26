#include <bits/stdc++.h>
#include <ctime>
#include <vector>
#include <unistd.h>
using namespace std;

void entry() {
  string user, pass, username;
  // Account sign-up/login
  cout
      << "Hello and welcome to CaSino++! Before we continue, you must ensure that you have an account in which your coins can be saved. Please enter 'register' if you would like to register or 'login' to log in. You may also type 'exit' at any time throughout the program to leave. ";
  string action;
  // Vector to store the usernames and passwords
  vector<string> usernames;
  vector<string> passwords;
  vector<string>emails;
  string email;
  /* Checks to see whether you are logging in or registering. Pushes the
   * username and password into the vector if registering. If logging in,
   * program, checks if the username and password match to the values in the
   * vector.*/
  cin >> action;
  if (action == "exit") {
    cout << "Thank you for using our program. if you'd like to try again, "
            "please re-run the program!";
    exit(0);
  }
  if (action == "register") {
    cout << endl;

    // Asks for username and password
    cout << endl;
    cout << "Please enter the username you would like to use for our system "
            "(no spaces): ";
    cin >> user;
    if (user == "exit") {
      cout << "Thank you for using our program. if you'd like to try again, "
              "please re-run the program!";
      exit(0);
    }
    usernames.push_back(user);
    cout << "Please enter your password: ";
    cin >> pass;
    if (pass == "exit") {
      cout << "Thank you for using our program. if you'd like to try again, "
              "please re-run the program!";
      exit(0);
    }
    passwords.push_back(pass);
    cout << endl;
    cout << "Now that you have made an account, please log in to the account."
         << endl;
    cout << endl;
    cout << "Username: ";
    cin >> user;
    if (user == "exit") {
      cout << "Thank you for using our program. if you'd like to try again, "
              "please re-run the program!";
      exit(0);
    }
    cout << "Password: ";
    cin >> pass;
    if (pass == "exit") {
      cout << "Thank you for using our program. if you'd like to try again, "
              "please re-run the program!";
      exit(0);
    }
    /* If statement makes sure that the user can try again infinitly incase they
     * input the wrong username or password */
    if (usernames[0] == user && passwords[0] == pass) {
      cout << "SUCCESSFUL LOGIN: You are now logged in as: " << user << endl
           << endl
           << endl;
      cout << endl;
    } else if (usernames[0] != user) {
      cout << "This account does not exist. ";
      bool flag = true;
      while (flag) {
        cout << "Try again for username: ";
        cin >> user;
        if (user == "exit") {
          cout << "Thank you for using our program. if you'd like to try "
                  "again, please re-run the program!";
          exit(0);
        }
        if (user == usernames[0]) {
          bool fflag = true;
          cout << "Please input your password: ";
          while (flag) {
            cin >> pass;
            if (pass == "exit") {
              cout << "Thank you for using our program. if you'd like to try "
                      "again, please re-run the program!";
              exit(0);
            }
            if (pass == passwords[0]) {
              cout << endl;
              cout << "SUCCESSFUL LOGIN You are now logged in as: " << user
                   << endl;
              cout << endl;
              fflag = false;
              flag = false;
            } else {
              cout << "Wrong password. Try again: ";
            }
          }
        }
      }
    } else if (usernames[0] == user && passwords[0] != pass) {
      bool flag = true;
      while (flag) {
        cout << "The password is incorrect. Please try again: ";
        cin >> pass;
        if (pass == "exit") {
          cout << "Thank you for using our program. if you'd like to try "
                  "again, please re-run the program!";
          exit(0);
        }
        if (pass == passwords[0]) {
          cout << "SUCCESSFUL LOGIN: You are now logged in as: " << user
               << endl;
          flag = false;
        }
      }
    }
  } else if (action == "login") {
    cout << endl;
    if (usernames.size() == 0) {
      // If no accounts exist, automatically registers
      cout << "Sorry, it looks like there are no accounts in our system yet, "
              "please create a "
              "new one.\n";
      cout << endl;
      // Account is created with username and password

      cout << endl;
      cout << "Please enter the username you would like to use for our system "
              "(no spaces): ";
      cin >> user;
      if (user == "exit") {
        cout << "Thank you for using our program. if you'd like to try again, "
                "please re-run the program!";
        exit(0);
      }
      usernames.push_back(user);
      cout << "Please enter your password: ";
      cin >> pass;
      if (pass == "exit") {
        cout << "Thank you for using our program. if you'd like to try again, "
                "please re-run the program!";
        exit(0);
      }
      cout << endl;
      passwords.push_back(pass);
      // Prompts user for Username and Password
      cout << "Now that you have made an account, please log in to the account."
           << endl;
      cout << "Username: ";
      cin >> user;
      if (user == "exit") {
        cout << "Thank you for using our program. if you'd like to try again, "
                "please re-run the program!";
        exit(0);
      }
      cout << "Password: ";
      cin >> pass;
      if (pass == "exit") {
        cout << "Thank you for using our program. if you'd like to try again, "
                "please re-run the program!";
        exit(0);
      }
      /* Makes sure the username and password exist within the vector and allows
       * user to mess up as many times as possible */
      if (usernames[0] == user && passwords[0] == pass) {
        cout << "SUCCESSFUL LOGIN: You are now logged in as: " << user << endl;
        cout << endl;
      } else if (usernames[0] == user && passwords[0] != pass) {
        cout << "The password is incorrect. Please try again: ";
        bool flag = true;
        while (flag) {
          cout << "The password is incorrect. Please try again: ";
          cin >> pass;
          if (pass == "exit") {
            cout << "Thank you for using our program. if you'd like to try "
                    "again, please re-run the program!";
            exit(0);
          }
          if (pass == passwords[0]) {
            cout << "SUCCESSFUL LOGIN: You are now logged in as: " << user
                 << endl;
            flag = false;
          }
        }
      } else if (usernames[0] != user) {
        cout << "This account does not exist. Please re-check the username "
                "that you typed. ";
        bool flag = true;
        while (flag) {
          cout << "Try again. Username: ";
          cin >> user;
          if (user == "exit") {
            cout << "Thank you for using our program. if you'd like to try "
                    "again, please re-run the program!";
            exit(0);
          }
          if (user == usernames[0]) {
            bool flag2 = true;
            while (flag2) {
              cout << "Wrong password. Try again. Password: ";
              cin >> pass;
              if (pass == "exit") {
                cout << "Thank you for using our program. if you'd like to try "
                        "again, please re-run the program!";
                exit(0);
              }
              if (pass == passwords[0]) {
                cout << "SUCCESSFUL LOGIN! You are now logged in as " << user
                     << endl;
                flag2 = false;
              }
            }
          }
        }
      }
    }
  }
}

int main() {
  entry();
  cout<<"What game would you like to play? You can choose War, Slots, or Blackjack! : ";
  
}
