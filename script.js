const SocialMedia = {
  github: 'IsCorrea',
  linkedin: 'in/isabella-pires-f-corrêa',
  pinterest: 'isabellacorrea/_saved/',
  facebook: 'isabella.pires.754',
  twitter: 'Isabell87901065'
}

function changeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${SocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubPorfileInfos() {
  const url = `https://api.github.com/users/${SocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      bio.textContent = data.bio
      userGithubLink.href = data.html_url
      userGithubImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubPorfileInfos()
