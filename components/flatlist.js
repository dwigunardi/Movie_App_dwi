<FlatList
                initialScrollIndex={0}
                horizontal={true}
                data={movieItem.slice(0, 5)}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{alignSelf: 'stretch'}}
                renderItem={({item}) => (
                  <View style={{overflow: 'hidden'}}>
                    <Box border="2" borderRadius="md" marginTop={'10'}>
                      <VStack
                        space="4"
                        justifyContent="center"
                        alignItems="center">
                        <Box px="2" pt="2" borderRadius={'lg'}>
                          <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                            id:item.id,
                            name:item.original_title,
                          })}>
                            <Image
                              source={{
                                uri: `${getMovieUri + item.poster_path}`,
                              }}
                              alt="image"
                              style={{
                                borderRadius: 10,
                                width: 150,
                                height: 250,
                              }}
                            />
                          </TouchableOpacity>
                          {/* </AspectRatio> */}
                        </Box>
                        <Box
                          px="4"
                          className="flex justify-center align-middle">
                          <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            className="w-32 text-white text-base font-bold text-clip">
                            {item.original_title}
                          </Text>
                        </Box>
                        <Box px="4">
                          <Text className="text-slate-300 font-mono font-light"></Text>
                        </Box>
                      </VStack>
                    </Box>
                  </View>
                )}
                keyExtractor={item => item.id}
                onEndReached={props => setEnded(true)}
                onEndReachedThreshold={0.2}
                ListFooterComponent={ListFooter}
              />