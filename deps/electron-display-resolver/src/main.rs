fn main() {
    let monitors = electron_display_resolver::get_monitors();

    match monitors {
        Ok(monitors) => {
            for monitor in monitors.iter() {
                println!("{:#?}",monitor);
            }
        },
        Err(err) => panic!("{:?}",err)
    };
}