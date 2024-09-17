export interface IsBlogs {
    id: string,
    title: string,
    content: string
    date: string,
    img: string,
    view: string
}
export interface User{
  id: string,
  imageUrl?: string,
  name?: string,
  aboutMe?: string,
  userName?: string,
  linkedin?: string,
  facebook?: string,
  twitterX?: string,
  youtube?: string
}

export interface Publication{
  id: string,
  userId: string,
  title?: string,
  imagePublication?: any,
  content: any,
  tags?: string[],
  describe?: string,
  date: string
}

export function UseTableData () {
    const blogs = <IsBlogs[]> [
        {
          id: '1',
          title:'Te nulla oportere reprimique his dolorum',
          content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.</p> <h2>Titre de niveau 2</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus esse, praesentium in facere sequi voluptate impedit ab non delectus vero enim, cumque tenetur officiis, sed optio adipisci fugit soluta. Rerum voluptatem eos soluta vitae explicabo alias ratione rem eum illo modi odio ex minima illum fugit sapiente beatae doloribus quibusdam harum eveniet, quos aliquid dolorem consequuntur quo? Nisi, minima. Rerum quod sint adipisci iusto, ipsa ipsam culpa placeat mollitia obcaecati eos? Repudiandae, aut aliquam, quibusdam esse suscipit optio architecto dolor voluptatibus eius autem facere doloremque mollitia velit illo ea. Cum inventore, tempora eligendi quod rerum sint natus modi ratione saepe. Distinctio, quas minus</p> <img src="https://source.unsplash.com/650x200/?fashion?156"> <p>doloremque expedita amet dignissimos laboriosam voluptate nostrum, earum hic, officia vitae aliquam. Laudantium minima nulla numquam sint exercitationem quasi tenetur illo eos voluptatum nam, eveniet adipisci eligendi eum quis eaque omnis molestias? Quasi facere illo error neque magnam consequatur quos architecto deleniti. Fugiat corrupti veniam maxime nostrum, facere natus accusantium harum, voluptate provident accusamus minima blanditiis sed consectetur laborum, repellat facilis illum dignissimos perspiciatis reprehenderit labore possimus sunt? Aut facere eius veniam. Rem laudantium dolore mollitia eveniet, voluptatum sequi, animi maxime dolorum eos error atque possimus culpa cupiditate aliquam ipsam nulla cumque, veritatis quasi. Eligendi officia magni tenetur. Sapiente excepturi numquam eaque! Doloremque consequatur provident quis? Repudiandae vel dignissimos ratione voluptate? Placeat illo fugit reprehenderit voluptate doloremque ab corrupti voluptatum magnam dolore nam aliquam harum et doloribus, consequatur, similique perferendis fugiat voluptas.</p>',
          date: 'June 4, 2020',
          img: 'https://source.unsplash.com/200x200/?fashion?4',
          view:'2.4K'
        },
        {
          id: '2',
          title:'Te nulla oportere reprimique his dolorum 2',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
          date: 'June 2, 2020',
          img: 'https://source.unsplash.com/200x200/?fashion?1',
          view:'2.2K'
        },
        {
          id: '3',
          title:'Te nulla oportere reprimique his dolorum 3',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
          date: 'June 10, 2020',
          img: 'https://source.unsplash.com/200x200/?fashion?3',
          view:'1K'
        },
        {
          id: '4',
          title:'Te nulla oportere reprimique his dolorum 4',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
          date: 'Dec 10, 2020',
          img: 'https://source.unsplash.com/200x200/?fashion?2',
          view:'1.5K'
        }
    ]
    const ListsCurrent = <IsBlogs[]> [
      {
        id: 'BX75A4YHY9CEQ832',
        title:'Te nulla oportere reprimique his dolorum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
        date: 'June 4, 2020',
        img: 'https://source.unsplash.com/random/640x480/?fashion?4',
        view:'2.4K'
      },
      {
        id: '9XS2K95KLJO9GQCM',
        title:'Te nulla oportere reprimique his dolorum 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
        date: 'June 2, 2020',
        img: 'https://source.unsplash.com/random/640x480/?fashion?1',
        view:'2.2K'
      },
      {
        id: 'G5DNXDNOB9FDVU3A',
        title:'Te nulla oportere reprimique his dolorum 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
        date: 'June 10, 2020',
        img: 'https://source.unsplash.com/random/640x480/?fashion?3',
        view:'1K'
      },
      {
        id: 'OHBDXUR75R4BY4VG',
        title:'Te nulla oportere reprimique his dolorum 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
        date: 'Dec 10, 2020',
        img: 'https://source.unsplash.com/random/640x480/?fashion?',
        view:'1.5K'
      }
    ]
    const ListsTop = <IsBlogs[]> [
      {
        id: 'O92QY8CL89X0BHFG',
        title:'Te nulla oportere reprimique his dolorum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
        date: 'June 4, 2020',
        img: 'https://source.unsplash.com/random/640x480/?fashion?4',
        view:'2.4K'
      },
      {
        id: 'EZB3JKEKLPCYM07V',
        title:'Te nulla oportere reprimique his dolorum 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
        date: 'June 2, 2020',
        img: 'https://source.unsplash.com/random/640x480/?fashion?1',
        view:'2.2K'
      },
      {
        id: 'G5DNXDNOB9FDVU3A',
        title:'Te nulla oportere reprimique his dolorum 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
        date: 'June 10, 2020',
        img: 'https://source.unsplash.com/random/640x480/?fashion?3',
        view:'1K'
      },
      {
        id: '4EBYP7IMQFXN6VP7',
        title:'Te nulla oportere reprimique his dolorum 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
        date: 'Dec 10, 2020',
        img: 'https://source.unsplash.com/random/640x480/?fashion?',
        view:'1.5K'
      },
      {
        id: 'BCB3JJUGPGDIYFXZ',
        title:'Te nulla oportere reprimique his dolorum 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque modi enim inventore illo atque, corrupti quaerat soluta omnis. Autem fugiat deserunt culpa quia accusamus maxime facilis odio corporis, excepturi sunt. Aliquid qui sunt error pariatur accusamus quaerat! Mollitia dolor rerum eum id dignissimos, nobis tempore saepe sunt dolore fugit ratione, aliquid veniam laborum et, optio unde quo sequi quibusdam. Quia.',
        date: 'Dec 10, 2020',
        img: 'https://source.unsplash.com/random/640x480/?fashion?',
        view:'1.5K'
      }
    ]

    return{
        blogs,
        ListsCurrent,
        ListsTop
    }
}