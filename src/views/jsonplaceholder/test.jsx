<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                { data && data.map( p =>

            
                    <div className="shadow-xl card bg-base-100" key={p.id}>

                        <div className="card-body">
                            <h2 className="text-xl font-bold">{ p.title }</h2>
                            {/* <p>{ p.body }</p> */}
                            <p>{ p.id }</p>
                            <Link to={ "/post/" + p.id } className="btn">Læs mere</Link>
                        </div>

                    </div>
            
                ) }
                <p> apikey: news.org 3ce4eed9a78b4a22aadff41589164f32</p>
            </div>
