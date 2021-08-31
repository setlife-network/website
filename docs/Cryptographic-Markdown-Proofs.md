To sign a markdown file `signedFile.md`:

1. Copy the file contents upto and including the `---END---` line and save it with a filename that matches the signing Director's `memberId`.

2. Take the md5 hash of that file a overwrite the markdown contents: `md5 -r ./memberId > ./memberId`

3. The signing Director should sign the `memberId` file with the private key that matches the public key found in `/governance/directors/memberId/public-key.pem`. Use the following syntax to generate a signature:
```
openssl pkeyutl -sign -inkey /path-to-private-key/setlife-network-oscarLafarga-0 -in /path-to-file/memberId > /desired-path-for-signature-file/memberId.sig
```

4. Save the new `memberId.sig` in `/governance/directors/memberId/signatures/` in a new directory that matches the file that has been signed

5. Anyone can publicly verify that the file has not been altered by running:
```
openssl pkeyutl -verify -pubin -inkey /governance/directors/memberId/public-key.pem -in ./memberId -sigfile /governance/directors/memberId/signatures/signedFile.md/memberId.sig
```

6. For transparency and convenience, add the path to each signature below the `---END---` line of the original markdown file


To generate a public-private keypair for signing:

1. Open the terminal and go to a secure directory to store your keys (`~/.ssh`)

2. Type `ssh-keygen -m PEM` and follow the prompts, using a standard naming convention that matches a Director's `memberId` (ex: `organization-name-memberId`). Enter a secure password that you will not forget.

3. Ensure that 2 output files were generated: `organization-name-memberId` (private key) and `organization-name-memberId.pub` (public key)

4. Create a PEM-compatible public key by entering `ssh-keygen -e -f organization-name-memberId.pub -m PEM > organization-name-memberId.pem`

5. Copy the PEM file to a public location where it can be used to verify signatures

