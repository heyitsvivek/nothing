      function Make(){


        MakeText();

        controls.minPos     = -1000.7;
        controls.maxPos     =  0;
        controls.multiplier =  .0000001 * textParticles.totalHeight;
        controls.dampening  = .95;


        links = [];
        for( var i = 0; i < linkInfo.length; i++ ){

         links[i] = new Link(font , linkInfo[i].title ,linkInfo[i].href  );
         links[i].add( new THREE.Vector3( 0,-i*.15 - 150.3, 0));

        }




     




        // SNOW top!
        var pf = ParticleField( 1000 , -2 , -10 , 3 , 100 );
        scene.add( pf );



        // FIRST SNOWFLAKE
        var l = new THREE.Vector3( 0 , -0,-.5 );
        AddSnowflake( l )


        G.story.AddQuantizedEvent( -.2 , function(UD,pos,delta){
          G.audio.play( G.audio.buffers.logoHit.buffer , 2 , .1 );
        });

        G.story.AddQuantizedEvent( -1 , function(UD,pos,delta){
          G.audio.play( G.audio.buffers.logo.buffer , 2 , .1);
        });





        //HEART
        G.models.heart.material = new THREE.MeshNormalMaterial({
                side: THREE.DoubleSide
              });

        G.models.heart.scale.multiplyScalar( .1);
        G.models.heart.rotation.y = 1.5* Math.PI;
        G.models.heart.position.y = -3.5;
        G.models.heart.position.z = -1;

        scene.add( G.models.heart );

        // Heartbeats
        for( var i = 0; i < 10; i++ ){
          G.story.AddQuantizedEvent( -2.5 - i * .5, function(UD,pos,delta){
            G.audio.play( G.audio.buffers.heartbeat.buffer , 1 , (1-(i/10)) * 3);
          });
        }



 

        //VOID
        var sMat = new THREE.MeshBasicMaterial({color:"black"});
        var sGeo = new THREE.CylinderGeometry( 1 , 1, 1, 30 );

        var s = new THREE.Mesh( sGeo , sMat );
        s.rotation.x = Math.PI * .5;
        s.position.y = -7;
        s.position.z = -.5;

        scene.add( s );

        FadeLoop(G.audio.buffers.drone1.buffer, .7 , -6 , -7 , -8, -10 );
      




        //WINDOW
        var l = new THREE.Vector3( 0 , -10.5,-2.5 );
        AddWindow( l );
        AddDude( l );

        // background sad stuff
        FadeLoop(G.audio.buffers.worle2.buffer, .7 , -9.5 , -10.5 , -15, -16 );





        G.story.AddQuantizedEvent( -27 , function(UD,pos,delta){
          G.audio.play( G.audio.buffers.glass1.buffer , 1 , 1);
        });

        G.story.AddQuantizedEvent( -27.4 , function(UD,pos,delta){
          G.audio.play( G.audio.buffers.glass2.buffer , 1 , 1);
        });

        G.story.AddQuantizedEvent( -26.8, function(UD,pos,delta){
          G.audio.play( G.audio.buffers.glass3.buffer , 1 , 1);
        });



        // DEATH RAYS
        var dr = DeathRays( 100 ,  -30 , -50 , 0 , 0 );
        scene.add( dr );



        FadeLoop(G.audio.buffers.enviornment1.buffer, .7 , -16 , -26 , -50, -55 );

        FadeLoop(G.audio.buffers.enviornment2.buffer, .7 , -30 , -43 , -48, -52 );
        FadeLoop(G.audio.buffers.enviornment4.buffer, .7 , -40 , -48 , -53, -56 );

        FadeLoop(G.audio.buffers.enviornment3.buffer, .6 , -56 , -60, -130, -137 );


        //DEATH BARS
        var dbA = [
          [-35,.5],
          [-40,.5],
          [-44,.4],
          [-47,.2],
          [-49,.1],
    
          [-54,5],
        ]
        var dr = DeathBars( dbA );
        scene.add( dr );


       /*

          GOD STUFF


        */

        //FLOWER
        G.models.flower1.material = new THREE.MeshNormalMaterial({
                side: THREE.DoubleSide
              });

        G.models.flower1.scale.multiplyScalar( .1);
        G.models.flower1.rotation.y = 1.5* Math.PI;
        G.models.flower1.position.y = -90;
        G.models.flower1.position.z = -30;

        G.story.AddQuantizedEvent( -54 , function(Up,pos,delta){
          if( Up == false ){
            scene.add(G.models.flower1)
          }else{
            scene.remove(G.models.flower1)
          }
        });


        //Tentacles
        G.models.tentacle1.material = new THREE.ShaderMaterial({
                vertexShader : shaders.vs.tentacles,
                fragmentShader : shaders.fs.tentacles,
                uniforms : G.uniforms
              });

        G.models.tentacle1.scale.multiplyScalar( .1);
        G.models.tentacle1.rotation.y = 1.5* Math.PI;
        G.models.tentacle1.position.y = -90;
        G.models.tentacle1.position.z = -30;

        G.story.AddQuantizedEvent( -54 , function(Up,pos,delta){
          if( Up == false ){
            scene.add(G.models.tentacle1)
          }else{
            scene.remove(G.models.tentacle1)
          }
        });


        G.story.AddQuantizedEvent(-106,function(){ controls.speed = 0; })
        G.story.AddQuantizedEvent(-107,function(){ controls.speed = 0; })
        G.story.AddQuantizedEvent(-109,function(){ controls.speed = 0; })
        G.story.AddQuantizedEvent(-110,function(){ controls.speed = 0; })
       

     


      }