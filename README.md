# Browser based RSA public/private key message sharing

Because sharing a password should never happen in plain-text.

Imagine Bob is in France and Paul is in the USA. Normally you'd have to go through a tedious load of tools to securely share a password. You definitely don't want to send it via skype, Email or any other text-message. Are you going to call? Maybe for a password that is called: "AGdfds$%$%sdfdfs$$gsddf___gffgfg323"? There is a better way...

![rsa-password-share-tutorial](https://raw.githubusercontent.com/tomw1808/rsa-message-sharing/master/src/assets/images/tutorial.gif "Tutorial Gif")


I had this problem so many times that I finally wrote a solution that works on Mac, Windows, in the Browser, no Server, everywhere. You could even go ahead and make a Phonegap solution out of it.

It is a one-time public key usage. I think the correct expression for it is perfect forward encryption, but I might be wrong.

# Hosted solution

Open up this link and add it to your bookmarks. Every time you want to share a password (and I know it will happen!) you can just open that tool with your the colleagues and follow the instructions.

http://tomw1808.github.io/rsa-message-sharing/#/

# Download and Develop yourself

    git clone git@github.com:tomw1808/rsa-message-sharing.git
    npm install
    bower install
    
happy coding.

# Issues

Happy to have them. If it is something encryption related, please let me know as well. I am no crypto-expert, I just use the algorithms. If there is a specific concern about the usage, I am also happy to remove the repository or put a CLEAR warning out.

# License

MIT.